// // import { cn } from "@/utils/cn";
// // import React from "react";
// // import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// // import {
// //   IconArrowWaveRightUp,
// //   IconBoxAlignRightFilled,
// //   IconBoxAlignTopLeft,
// //   IconClipboardCopy,
// //   IconFileBroken,
// //   IconSignature,
// //   IconTableColumn,
// // } from "@tabler/icons-react";

// // export function BentoGridDemo() {
// //   return (
// //     <BentoGrid className="max-w-5xl mx-auto">
// //       {items.map((item, i) => (
// //         <BentoGridItem
// //           key={i}
// //           title={item.title}
// //           description={item.description}
// //           header={item.header}
// //           icon={item.icon}
// //           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
// //         />
// //       ))}
// //     </BentoGrid>
// //   );
// // }
// // const Skeleton = () => (
// //   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// // );
// // const items = [
// //   {
// //     title: "The Dawn of Innovation",
// //     description: "Explore the birth of groundbreaking ideas and inventions.",
// //     header: <Skeleton />,
// //     icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
// //   },
// //   {
// //     title: "The Digital Revolution",
// //     description: "Dive into the transformative power of technology.",
// //     header: <Skeleton />,
// //     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
// //   },
// //   {
// //     title: "The Art of Design",
// //     description: "Discover the beauty of thoughtful and functional design.",
// //     header: <Skeleton />,
// //     icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
// //   },
// //   {
// //     title: "The Power of Communication",
// //     description:
// //       "Understand the impact of effective communication in our lives.",
// //     header: <Skeleton />,
// //     icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
// //   },
// //   {
// //     title: "The Pursuit of Knowledge",
// //     description: "Join the quest for understanding and enlightenment.",
// //     header: <Skeleton />,
// //     icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
// //   },
// //   {
// //     title: "The Joy of Creation",
// //     description: "Experience the thrill of bringing ideas to life.",
// //     header: <Skeleton />,
// //     icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
// //   },
// //   {
// //     title: "The Spirit of Adventure",
// //     description: "Embark on exciting journeys and thrilling discoveries.",
// //     header: <Skeleton />,
// //     icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
// //   },
// // ];
// // export default BentoGridDemo

// import * as React from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import exp from "constants"

// export function CardWithForm() {
//   return (
//     <div>
//     <Card className="w-[350px] ">
//       <CardHeader>
//         <CardTitle>Create project</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Select>
//                 <SelectTrigger id="framework">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="next">Next.js</SelectItem>
//                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                   <SelectItem value="astro">Astro</SelectItem>
//                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//     </Card>
//     </div>
//   )
// }
// export default CardWithForm

const features = [
    { name: 'Project', description: 'E-Commerce.' },
    { name: 'Tech-stack', description: 'Mongo, Express, React,Node' },
    { name: 'Duration', description: '3 days"' },
    { name: 'XYZ', description: 'Hand sanded and finished with natural oil' },
    { name: 'XYZ', description: 'Wood card tray and 3 refill packs' },
    { name: 'XYZ', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MERN STACK Project</h2>
            <p className="mt-4 text-gray-500">
            The MERN stack is a popular technology stack used for building full-stack web applications. It comprises four main technologies: MongoDB, Express.js, React.js, and Node.js. Each component of the MERN stack serves a specific purpose in the development of web applications
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className=" bg-black mt-4 w-24 min-w-full h-24 min-h-full">
            <h1 className="text-left  mt-8 text-5xl font-bold font-sans px-14">Ready for building??</h1>
            <p className="text-left  mt-8 text-1xl font-normal font-sans px-14">Includes the necessary assets, design files, style guide and a README file to help you with each step of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus error, aspernatur rem eligendi eaque incidunt pariatur quis maxime enim explicabo, velit eum ex reiciendis vel at itaque eius odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores impedit dicta obcaecati architecto non, ex dolor eius perferendis repudiandae debitis molestias iusto iure tempore! Modi repellendus deleniti quasi accusantium!</p>
            <button className="bg-white text-black ml-14 mt-8 px-14 h-10"> Start Building</button>
          </div>
        </div>
        
      </div>
    )
  }
  