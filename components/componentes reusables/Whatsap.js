import Image from "next/image";
import what from "../../public/what.png";
import Link from "next/link";

const Whatsap = () => {
  return (
    <div
      className="fixed inset-y-0 bottom-0 right-0 flex justify-end items-end px-7 py-9 max-md:px-7"
      style={{ pointerEvents: "none" }}
    >
      <Link
        className="rounded-3xl p-1"
        href={""}
        style={{ pointerEvents: "auto" }}
      >
        <Image
          src={what}
          width={0}
          height={0}
          alt="Imagen"
          className="w-[70px] h-16 rounded-full max-md:w-16 transition-all duration-300 hover:opacity-90"
          style={{ pointerEvents: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Whatsap;
