import { FC, useState } from 'react';
// import { useGetPage, useGetPages, useGetSites } from '../../../graphql/reactQuery/reactQuery';
// import { Page, Site } from '../../../interfaces/site.interface';
// import { CardSite } from '../card';
// import { CardPage } from '../card/cardPage';
// import { CardProduct } from '../card/cardProduct';
// import { HeadingDashboard, HeadingDashboardPage } from '../heading';
// import { Pagination } from '../pagination';
// interface Products {
//   page: Page ;
// }

// export const Products: FC<Products> = ({  page }) => {
//   const { data: page2 } = useGetPage(page?._id!, page?.data.type!);

//   return (
//     <>
//       {/* {page && <HeadingDashboardPage title={title} page={page as Page}/>} */}
//       <div className={`grid grid-cols-2 gap-3 sm:gap-6  sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5`}>
//         {
//           // page2?.product.map((data, i) => <CardProduct key={i} data={data} />)
//         }
//       </div>
//       {/* <Pagination /> */}
//     </>
//   )
// }