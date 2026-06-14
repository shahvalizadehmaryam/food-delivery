import Image from "next/image";

type AddToCartButtonProps = {
  label?: string;
};

function AddToCartButton({ label = "Add to cart" }: AddToCartButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="absolute bottom-0 right-0 z-10 block cursor-pointer p-0 leading-none transition hover:scale-105"
    >
      <Image
        src="/images/icons/add-to-cart.svg"
        alt=""
        width={50}
        height={50}
        aria-hidden
      />
    </button>
  );
}

export default AddToCartButton;
