import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Seo, Site } from "../../interfaces/site.interface";
import { HeaderPage } from "../components";
import { Main } from "../components/main";


interface Layout {
	seo?: Seo ;
	children?: React.ReactNode;
	site?: Site
}

export const LayoutPages: FC<Layout> = ({
	seo,
	children,
	site
}) => {
	return (
		<>
			<Head>
			<title>{seo ? seo.name : 'crisCRM'}</title>
				<meta name="keywords" />
				<meta name="description" content={seo ? seo.description : 'description'} />
				<meta property="og:title" content={seo ? seo.name : 'crisjs'} />
				<meta property="og:description" content={seo ? seo.description : 'description'} />
				<meta property="og:type" content="og:product" />
				{seo && seo.image && <meta property="og:image" content={seo ? seo?.image.src :'image'} />}
				<link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />
			</Head>
      <HeaderPage />
			<Main>
				{children}
			</Main>
			{/* <Footer /> */}
			</>
	);
};
