import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";
import literals from "../../data/literals.json";
import { buildHref } from "../../utils/image-url";

const Header = ({ handleScroll }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, sectionTitles } = literals;

  useEffect(() => {
    setMounted(true);
  }, []);

  const MenuOptions = ({isPopover}) =>
    <div className={isPopover ? "grid grid-cols-1" : "flex"}>
      {sectionTitles.map((title, index) => (
        <Button key={index} onClick={() => handleScroll(index)}>{title}</Button>
      ))}
      {!isPopover && mounted && theme && data.darkMode && (
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Image
            className="h-6"
            height={24}
            width={24}
            src={buildHref(theme === "dark" ? "moon.svg" : "sun.svg")}
          />
        </Button>
      )}
    </div>;
  
  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              <MenuOptions isPopover />
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
          <MenuOptions />
      </div>
    </>
  );
};

export default Header;
