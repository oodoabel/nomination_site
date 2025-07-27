"use client";
// import { candidates } from "@/actions/candidate";
import { useEffect, useState } from "react";

export default function NominationResultsPage() {
  const [names, setNames] = useState<any[]>([]);

  async function fetchCandidates() {
    try {
      const response = await fetch("/api");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      console.log(data);
      setNames(data.data);
      return data;
    } catch (error: any) {
      console.error("Error fetching candidates:", error.message);
      return { status: "error", data: null };
    }
  }

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-slate-100">
        Nomination Results
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden shadow-sm bg-slate-900">
          <thead className="bg-slate-800 text-slate-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-slate-700">
                Candidate Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-slate-700">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold border-b border-slate-700">
                Nominations
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {(names || []).map((candidate: any) => (
              <tr
                key={candidate.id}
                className="hover:bg-slate-800 transition duration-200"
              >
                <td className="px-6 py-4 text-slate-200">
                  {candidate.nominee}
                </td>
                <td className="px-6 py-4 text-slate-300">
                  {candidate.category}
                </td>
                <td className="px-6 py-4 text-indigo-400 font-bold">
                  {candidate.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
