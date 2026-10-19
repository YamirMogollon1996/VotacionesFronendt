import React from "react";
import { CheckCircle2, X } from "lucide-react"

const VoteNotification = () => {
  return (
    <div

      className="bg-green-50 p-2  translate-x-40 duration-300 w-xs rounded-xl border shadow-2xl flex justify-around border-green-600 "
    >
      <CheckCircle2 size={40} color="#41A86F"></CheckCircle2>
      <div className="mx-4 text-[#E7F8F0] ">
        <strong className="text-[#1A7B3F] font-bold">Voto Registrado</strong>
        <p className="text-[12px]  text-[#1A7B3F]" style={{ margin: 0 }}>
          Tu voto para  ha sido añadido correctamente Maria.
        </p>

      </div>
      <X color="#41A86F"></X>
    </div>
  );
};

export default VoteNotification;
