import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import "./admin.css";

export const metadata: Metadata = {
  title: "ZARAI Admin Dashboard | ZARAIR",
  description:
    "Read-only monitoring and owner-authorized controls for the ZARAI token sale on BNB Chain.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
