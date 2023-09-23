import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks";
import { Button } from "@/components/Button";
import { ConfirmModal } from "@/components/Modal";
import logoutService from "@appState/slices/auth/logoutService";

export default function Logout() {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const [openConfirmModal, setOpenConfirmModal] =
    React.useState<boolean>(false);

  const handleLogout = React.useCallback(async () => {
    dispatch(
      logoutService({
        showSuccessMessage: true,
        onSuccess() {
          route.push("/");
        },
      })
    );
  }, [dispatch, route]);

  return (
    <>
      <Button
        variant="secondary"
        iconReverse="logout"
        onClick={() => setOpenConfirmModal(true)}
      >
        logOut
      </Button>
      <ConfirmModal
        open={openConfirmModal}
        onClose={() => setOpenConfirmModal(false)}
        heading="areYouSureLogout"
        onConfirm={handleLogout}
      />
    </>
  );
}
