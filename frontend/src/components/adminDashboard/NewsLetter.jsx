import React, { useEffect, useState } from "react";
import api from "../../api/axios";

function NewsLetter() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [deleteId, setDeleteId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchSubscribers = async () => {
    try {
      const res = await api.get("/api/newsletter");
      setSubscribers(res.data.subscribers);
    } catch (error) {
      setMessage("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  // Confirm delete
  const confirmDelete = async () => {
    if (!deleteId) return;

    setDeleting(true);

    try {
      await api.delete(`/api/newsletter/${deleteId}`);

      setSubscribers((prev) => prev.filter((sub) => sub.id !== deleteId));

      setMessage("Subscriber removed successfully");
      setDeleteId(null); // close modal
    } catch (error) {
      setMessage("Failed to remove subscriber");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Newsletter Subscribers
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          View and manage users subscribed to your newsletter.
        </p>
      </div>

      {message && (
        <div className="text-sm font-medium text-gray-700">{message}</div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading subscribers...
          </div>
        ) : subscribers.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No subscribers found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Subscribed Date</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {subscribers.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {sub.email}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => setDeleteId(sub.id)}
                        className="text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {deleteId && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-80 space-y-4 pointer-events-auto">
            <h3 className="text-lg font-semibold text-gray-800">
              Confirm Deletion
            </h3>

            <p className="text-sm text-gray-600">
              Are you sure you want to remove this subscriber?
            </p>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 text-sm rounded border border-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsLetter;
