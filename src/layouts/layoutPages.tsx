import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Seo, Site } from "../../interfaces/site/site.interface";
import { getSlugByPage0, getSlugBySite } from "../../utils/functionV1";
import { HeaderPage } from "../components";
import { Footer0 } from "../components/footer";
import { Footer1 } from "../components/footer/footer1";
import { Footer2 } from "../components/footer/footer2";
import { Footer3 } from "../components/footer/footer3";
import { Footer4 } from "../components/footer/footer4";
import { Main } from "../components/main";
import usePages0ByParent from "../hooks/pages0/usePages0ByParent";
import useSiteAdmin from "../hooks/sites/useSiteAdmin";


interface Layout {

	children?: React.ReactNode;
}

export const LayoutPages: FC<Layout> = ({

	children,
}) => {
	// const { data:pages0 } = usePages0ByParent(process.env.API_SITE!)
	// console.log(pages0);
	const { query, asPath } = useRouter()

	const { data: site } = useSiteAdmin(process.env.API_SITE!);
	const pathsBySite = [...getSlugBySite(site!), ...getSlugByPage0(site!)]
	const seo = pathsBySite.find(data => data.asPath === asPath)?.seo
	return (
		<>
			<Head>
				<title>{`criscrm ${seo ? `| ${seo?.title}`: ''}`}</title>
				<meta name="description" content={seo?.description} key="desc" />
				<meta name="og:title" content={`criscrm ${seo ? `| ${seo?.title}`: null}`} />
				<meta name="og:description" content={seo?.description} />
				<meta name="og:image" content={seo?.image.src} />
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
