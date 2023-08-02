import React, { useState } from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type ProjectShowcaseType = {
  title: string;
  description: string;
  tags: string[];
  img_url: string;
  links: {
    demo: string;
    github: string;
  };
};

const ProjectShowcase: React.FC<ProjectShowcaseType> = ({
  title,
  img_url,
  description,
  tags,
  links,
}) => {
  return (
    <motion.div className={"relative mt-12 h-fit w-full rounded-xl "}>
      <div
        className={
          "absolute right-0 top-0 aspect-square w-1/2 rotate-[7deg]  after:absolute after:right-0 after:top-0 after:-z-10 after:h-full after:w-full after:rotate-[15deg] after:rounded-xl after:bg-emphasis-500 after:content-['']"
        }
      >
        <div className={"relative h-full w-full"}>
          <Image
            src={img_url}
            alt={`Project "${title}" preview img`}
            width={1600}
            height={900}
            className={
              "fit relative m-auto h-full rounded-xl object-cover contrast-[0.8] grayscale-[65%]"
            }
          />
          <div
            className={
              "absolute left-0 top-0 h-full w-full cursor-pointer rounded-xl bg-primary-900/50 [&:hover>span]:opacity-100"
            }
          >
            <span
              className={
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-900 p-4 opacity-0 transition"
              }
            >
              See full image
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          "relative flex h-full w-[60%]  items-center px-8  max-lg:w-full"
        }
      >
        <div className={""}>
          <span className={"font-mono text-sm text-emphasis-300"}>
            Featured Project
          </span>
          <h1 className={"mt-10 text-3xl font-semibold max-lg:text-xl"}>
            {title}
          </h1>
          <span
            className={
              "relative mt-4 block h-0.5 w-12 bg-emphasis-500 after:absolute after:-right-2 after:h-0.5 after:w-0.5 after:bg-emphasis-500 after:content-['']"
            }
          ></span>
          <p className={"mt-4 rounded-lg bg-primary-900 p-4"}>{description}</p>
          <span
            className={
              "relative mt-4 block h-0.5 w-12 bg-emphasis-500 after:absolute after:-right-2 after:h-0.5 after:w-0.5 after:bg-emphasis-500 after:content-['']"
            }
          ></span>
          <ul
            className={
              "mt-10 flex flex-wrap items-center justify-start gap-2 text-xs font-semibold uppercase text-primary-950"
            }
          >
            {tags.map((tag, i) => (
              <li
                key={i}
                className={"whitespace-nowrap bg-emphasis-300 px-2 py-1"}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className={"mt-12 flex gap-4 text-xl"}>
            <Link href={links.github} target={"_blank"}>
              <FiGithub />
            </Link>{" "}
            <Link href={links.demo} target={"_blank"}>
              <FiExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// <div
//   className={
//     "relative grid aspect-[16/8] w-full grid-cols-[4fr_3fr] rounded bg-primary-900/50  shadow-[0px_10px_30px_-10px] shadow-black/30  max-lg:grid-cols-none max-lg:grid-rows-[20vh_auto]"
//   }
// >
//   <div
//     className={"relative flex h-full items-center px-8 py-8 max-lg:order-1"}
//   >
//     <div className={"absolute right-8 top-8 flex gap-4  text-xl"}>
//       <Link href={links.github} target={"_blank"}>
//         <FiGithub />
//       </Link>{" "}
//       <Link href={links.demo} target={"_blank"}>
//         <FiExternalLink />
//       </Link>
//     </div>
//     <div className={""}>
//           <span className={"font-mono text-sm text-emphasis-300"}>
//             Featured Project
//           </span>
//       <h1 className={"mt-10 text-3xl font-semibold max-lg:text-xl"}>
//         {title}
//       </h1>
//       <span
//         className={
//           "relative mt-4 block h-0.5 w-12 bg-emphasis-500 after:absolute after:-right-2 after:h-0.5 after:w-0.5 after:bg-emphasis-500 after:content-['']"
//         }
//       ></span>
//       <p className={"mt-4"}>{description}</p>
//       <span
//         className={
//           "relative mt-4 block h-0.5 w-12 bg-emphasis-500 after:absolute after:-right-2 after:h-0.5 after:w-0.5 after:bg-emphasis-500 after:content-['']"
//         }
//       ></span>
//       <ul
//         className={
//           "mt-10 flex flex-wrap items-center justify-start gap-2 text-xs font-semibold uppercase text-primary-950"
//         }
//       >
//         {tags.map((tag, i) => (
//           <li
//             key={i}
//             className={"whitespace-nowrap bg-emphasis-300 px-2 py-1"}
//           >
//             {tag}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
//   <div className={"relative h-full opacity-90"}>
//     <Image
//       src={img_url}
//       alt={`Project "${title}" preview img`}
//       width={1600}
//       height={900}
//       className={
//         "fit relative m-auto h-full rounded object-cover contrast-75 grayscale-[80%]"
//       }
//     />
//     <div
//       className={
//         "absolute left-0 top-0 h-full w-full cursor-pointer bg-primary-900/50 [&:hover>span]:opacity-100"
//       }
//       onClick={() => setShowFullImage(true)}
//     >
//           <span
//             className={
//               "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-900 p-4 opacity-0 transition"
//             }
//           >
//             See full image
//           </span>
//     </div>
//   </div>
//
//   <AnimatePresence>
//     {showFullImage && (
//       <ViewFullImageModal
//         project_name={title}
//         url={img_url}
//         dispose={disposeFullImg}
//       />
//     )}
//   </AnimatePresence>
// </div>

export default ProjectShowcase;

const ViewFullImageModal: React.FC<{
  project_name: string;
  url: string;
  dispose: () => any;
}> = ({ project_name, url, dispose }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      className={
        "fixed left-0 top-0 z-[999] flex h-full w-full items-center justify-center p-20 backdrop-blur backdrop-grayscale-[80%] max-lg:p-4"
      }
      onClick={dispose}
    >
      <div onClick={(e) => e.stopPropagation()} className={" p-4"}>
        <div className={"flex items-center justify-between"}>
          <h1 className={"relative max-w-[90%] py-5 text-3xl"}>
            {project_name}{" "}
          </h1>
          <button className={"h-fit w-fit p-2 text-4xl"} onClick={dispose}>
            <FiX />
          </button>
        </div>

        <div
          className={
            "flex items-center justify-center overflow-hidden border border-emphasis-300"
          }
        >
          <Image
            src={url}
            alt={`Project "${project_name}" image`}
            width={1600}
            height={900}
            className={"h-full w-full flex-shrink-0 object-contain"}
          />
        </div>
      </div>
    </motion.div>
  );
};
