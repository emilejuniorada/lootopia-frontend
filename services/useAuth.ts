import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import useGlobalStore from "@/stores/global";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { handleApiError } from "@/lib/apiErrorHandler";

// Get backend URL from environment variable
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";

const useAuth = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const register = async (data: { email: string; password: string; [key: string]: any }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${backendUrl}/api/register`,
        data
      );
      const { id } = response.data;
      setSuccess(true);
      return id;
    } catch (error: any) {
      setError(true);
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const sendLink = async (data: { id: number | null }) => {
      try {
        setLoading(true);
        await axios.get(
          `${backendUrl}/api/auth/renvoi/verif/${data.id}`
        );
        setSuccess(true);
      } catch (error: any) {
        setError(true);
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    };

  return { register, sendLink, loading, success, error};
};

export default useAuth;