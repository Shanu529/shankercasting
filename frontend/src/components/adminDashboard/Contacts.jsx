import React, { useEffect, useState } from "react";
import api from "../../api/axios";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchContacts = async () => {
    try {
      const res = await api.get("/api/contact");
      setContacts(res.data.contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      setMessage("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/api/contact/${id}`);

      setContacts((prev) =>
        prev.filter((contact) => contact.id !== id)
      );

      setMessage("Contact deleted successfully");

    } catch (error) {
      console.error("Delete error:", error);
      setMessage("Failed to delete contact");
    }
  };

  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-2xl font-bold text-gray-800">Contacts</h2>
        <p className="text-gray-500 text-sm mt-1">
          View and manage submitted contact forms.
        </p>
      </div>

      {message && (
        <div className="text-sm font-medium text-gray-700">
          {message}
        </div>
      )}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading contacts...
          </div>
        ) : contacts.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No contacts found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Message</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {contact.name}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {contact.email}
                    </td>
                    <td className="px-6 py-4 text-gray-500 max-w-xs truncate">
                      {contact.message}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default Contacts;
