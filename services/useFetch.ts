import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { handleApiError } from "@/lib/apiErrorHandler";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "";
const useFetch = <T = any>(
  config: { headers?: Record<string, string> } = {},
  autoFetch: boolean = false
) => {
  const [rows, setRows] = useState<T[]>([]);
  const [row, setRow] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();

  const getAuthConfig = () => {
    const token = session?.user?.token;
    if (!token) {
      throw new Error("Authentication token is missing");
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const getDatas = async (url: string): Promise<T[] | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${backendUrl}${url}`, getAuthConfig());
      setRows(response.data);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (url: string, id: string): Promise<T | undefined> => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${backendUrl}${url}/${id}`, getAuthConfig());
      setRow(response.data);
      return response.data;
    } catch (error: any) {
      setError(
        error.response?.data?.message || error.message || "An error occurred"
      );
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const createData = async (url: string, data: any): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${backendUrl}${url}`, data, getAuthConfig());
      return true;
    } catch (error: any) {
      setError(
        error.response?.data?.message || error.message || "An error occurred"
      );
      handleApiError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (url: string, id: string, data: any): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await axios.put(`${backendUrl}${url}/${id}`, data, getAuthConfig());
      return true;
    } catch (error: any) {
      setError(
        error.response?.data?.message || error.message || "An error occurred"
      );
      handleApiError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (url: string, id: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${backendUrl}${url}/${id}`, getAuthConfig());
      return true;
    } catch (error: any) {
      setError(
        error.response?.data?.message || error.message || "An error occurred"
      );
      handleApiError(error);
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  return {
    rows,
    row,
    loading,
    error,
    getDatas,
    getData,
    createData,
    updateData,
    deleteData,
  };
};

export default useFetch;
