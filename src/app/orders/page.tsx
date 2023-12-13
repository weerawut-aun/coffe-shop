"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { OrderType } from "../types/types";
import { formatPrice } from "@/lib/format";
import { CiEdit } from "react-icons/ci";

const OrdersPage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: async () =>
      await fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
  };

  if (isLoading || status === "loading") return "Loading...";

  return (
    <div className="h-full p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Price</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: OrderType) => (
            <tr key={item.id}>
              <td className="px-1 py-6 text-center">{item.id}</td>
              <td className="px-1 py-6 text-center">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="px-1 py-6 text-center">
                {formatPrice(item.price)}
              </td>
              <td className="px-1 py-6 text-center">{item.products[0].name}</td>
              {session?.user.isAdmin ? (
                <td className="px-1 py-6 text-center">
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      type="text"
                      placeholder={item.status}
                      className="rounded-md p-2 ring-1 ring-red-100"
                    />
                    <button className="rounded-full bg-red-400 p-2 hover:bg-red-500">
                      <CiEdit size={25} />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="px-1 py-6 text-center">{item.status}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
