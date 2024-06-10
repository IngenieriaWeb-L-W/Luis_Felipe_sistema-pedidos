import React from "react";
import Link from "next/link";
import classNames from "classnames";

const CategoryMenu = ({ categories, selectedCategory, onCategorySelect }) => {
    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 rounded-lg p-4 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-100">Categorías</h2>
            <nav className="grid gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href="#"
                        className={classNames(
                            "px-6 py-4 rounded-lg text-center font-semibold transition-all duration-300 ease-in-out transform hover:scale-105",
                            {
                                "bg-blue-500 text-white shadow-lg hover:bg-blue-600": category.name === selectedCategory,
                                "bg-gray-800 text-gray-300 hover:bg-gray-700 shadow-md": category.name !== selectedCategory,
                            }
                        )}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                            e.preventDefault();
                            onCategorySelect(category.name);
                        }}
                        prefetch={false}
                    >
                        {category.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default CategoryMenu;
