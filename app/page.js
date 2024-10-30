"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  const setUmur = (value, index) => {
    const newUmur = [...data.umur];
    newUmur[index] = value;
    const newData = { ...data, umur: newUmur };
    setData(newData);
  };
  const setProduk = (value, index) => {
    const newProduk = [...data.komposisi];
    newProduk[index].produk = value;
    const newData = { ...data, komposisi: newProduk };
    setData(newData);
  };
  const setBiaya = (value, index, jenis, persenIndex) => {
    const newProduk = [...data.komposisi];
    jenis === "admin"
      ? (newProduk[index].admin[persenIndex] = value)
      : (newProduk[index].ff[persenIndex] = value);

    const newData = { ...data, komposisi: newProduk };
    setData(newData);
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-data");
      const umur = res.data.umur.umur;
      const komposisi = res.data.komposisi;

      setData({ komposisi, umur });
    } catch (e) {
      console.error(e);
    }
  };
  const syncData = async () => {
    console.log(data);
    try {
      const res = await axios.post("http://localhost:8000/update-data", data, {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
    } catch (e) {
      console.error(e);
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-8 p-8">
      <p className="text-2xl font-bold">biaya komposisi</p>
      <div className="flex items-center justify-end">
        <Button onClick={syncData}>save</Button>
      </div>
      {data && (
        <table className="w-full">
          <thead>
            <tr>
              <th rowSpan={3}>no</th>
              <th rowSpan={3}>produk</th>
              <th rowSpan={3}>komposisi</th>
              <Dialog>
                <DialogTrigger asChild>
                  <th
                    colSpan={3}
                    className="hover:bg-muted transition-all duration-300 cursor-pointer"
                  >
                    umur
                  </th>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>edit umur</DialogTitle>
                  <div className="grid grid-cols-3 gap-4">
                    {data.umur.map((d, i) => (
                      <Input
                        value={d}
                        key={i}
                        onChange={(e) => setUmur(e.target.value, i)}
                        type="number"
                      />
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </tr>
            <tr>
              <td>{data.umur[0]}</td>
              <td>{data.umur[1]}</td>
              <td>{data.umur[2]}</td>
            </tr>
            <tr>
              <td>{data.umur[3]}</td>
              <td>{data.umur[4]}</td>
              <td>{data.umur[5]}</td>
            </tr>
          </thead>
          <tbody>
            {data.komposisi.map((k, i) => (
              <React.Fragment key={i}>
                <tr>
                  <td rowSpan={2}>{i + 1}</td>
                  <Dialog>
                    <DialogTrigger asChild>
                      <td
                        rowSpan={2}
                        className="hover:bg-muted transition-all duration-300 cursor-pointer"
                      >
                        {k.produk}
                      </td>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle> edit produk {k.produk}</DialogTitle>
                      <div className="space-y-4">
                        <div>
                          <label>nama produk</label>
                          <Input
                            value={k.produk}
                            onChange={(e) => setProduk(e.target.value, i)}
                          />
                        </div>
                        <div>
                          <label>biaya admin</label>
                          <div className="grid grid-cols-3 gap-4">
                            {k.admin.map((a, index) => (
                              <Input
                                type="number"
                                value={a}
                                key={index}
                                onChange={(e) =>
                                  setBiaya(e.target.value, i, "admin", index)
                                }
                              />
                            ))}
                          </div>
                        </div>
                        <div>
                          <label>biaya ff</label>
                          <div className="grid grid-cols-3 gap-4">
                            {k.ff.map((a, index) => (
                              <Input
                                type="number"
                                value={a}
                                key={index}
                                onChange={(e) =>
                                  setBiaya(e.target.value, i, "ff", index)
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <td>biaya admin</td>
                  {k.admin.map((a, i) => (
                    <td key={i}>{a}%</td>
                  ))}
                </tr>
                <tr>
                  <td>biaya ff</td>
                  {k.ff.map((f, i) => (
                    <td key={i}>{f}%</td>
                  ))}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
