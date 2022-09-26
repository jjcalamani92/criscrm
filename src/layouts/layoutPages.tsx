import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Seo, Site } from "../../interfaces/site.interface";
import { HeaderPage } from "../components";
import { Footer0 } from "../components/footer";
import { Footer1 } from "../components/footer/footer1";
import { Footer2 } from "../components/footer/footer2";
import { Footer3 } from "../components/footer/footer3";
import { Footer4 } from "../components/footer/footer4";
import { Main } from "../components/main";
import usePages0ByParent from "../hooks/pages0/usePages0ByParent";


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
	const { data:pages0 } = usePages0ByParent(process.env.API_SITE!)
	// console.log(pages0);

	return (
		<>
			<Head>
			<title>{seo ? seo.title : 'criscrm'}</title>
				<meta name="keywords" />
				<meta name="description" content={seo ? seo.description : 'description'} />
				<meta property="og:title" content={seo ? seo.title : 'criscrm'} />
				<meta property="og:description" content={seo ? seo.description : 'description'} />
				<meta property="og:type" content="og:product" />
				{seo && seo.image && <meta property="og:image" content={seo ? seo?.image.src :'image'} />}
				<link rel="icon" href={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662447369/qgy7hht1b12tfc8tyrx8.jpg"} />
			</Head>
      <HeaderPage />
			<Main>
				{children}
			</Main>
			<Footer4 />
			<br />
			<Footer3 />
			<br />

			<Footer2 />
			<br />

			<Footer1 />
			<br />

			<Footer0 />
			</>
	);
};
