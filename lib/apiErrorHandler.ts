import { signOut } from "next-auth/react";
import { toast } from "sonner";

export function handleApiError(error: any, setError?: (msg: string) => void) {
  const status = error?.response?.status;
  if (status === 400) {
    toast.error(error.response?.data?.error, {
      description: "Vérifiez vos informations et réessayez."
    });
  } else if (status === 401) {
    toast.info("Vous n'êtes pas autorisé à accéder à cette ressource", { description: "Vérifiez que vous êtes connecté(e) et que vous possédez les permissions nécessaires." });
    signOut({ callbackUrl: "/login" })
  } 
  else if (status === 403) {
    toast.warning(error.response?.data?.error);
  }
  else if (status === 404) {
    toast.error("Ressource inexistante", { description: "Vérifiez les informations et réessayez." });
  } else {
    toast.error("Une erreur interne est survenue", { description: "Contactez le support si l'erreur persiste." });
  }     
  console.error("API Error:", error);
}