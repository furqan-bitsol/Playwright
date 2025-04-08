import React from "react";

interface CategoryCardProps {
  icon: string;
  name: string;
  isActive?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  name,
  isActive = false,
}) => {
  const baseStyles =
    "flex overflow-hidden flex-col items-center px-9 py-6 rounded w-[170px] max-md:px-5";
  const activeStyles = isActive
    ? "bg-red-500 text-neutral-50 shadow-sm"
    : "border border-solid border-black border-opacity-30 text-black";

  return (
    <div className={`${baseStyles} ${activeStyles}`}>
      <img
        src={icon}
        alt={name}
        className="object-contain w-14 aspect-square"
      />
      <p className="mt-4">{name}</p>
    </div>
  );
};
