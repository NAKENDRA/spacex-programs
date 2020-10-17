import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/SpaceX.module.css'
import FilterCard from '../components/filter';
import SpaceXCard from '../components/spaceXData';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';


export default function SpaceX() {
  const filterState = useSelector((state) => state.FilterReducer);
  const {launchYearFilter, landFilter, launchFilter} = filterState;
  const cookies = parseCookies();
  const router = useRouter();

    useEffect(() => {
        setURL();
    }, [launchYearFilter, landFilter, launchFilter])

    const setURL = () => {
      router.push(`/?launch_success=${cookies.launchFilter || ''}&&land_success=${cookies.landFilter || ''}&&launch_year=${cookies.launchYearFilter || ''}`);
  }

  return (
    <div className={styles.container}>
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <Head>
        <title>SpaceX Programs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
            name="description"
            content="SpaceX Launch Program "
          />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftElement}>
        <FilterCard/>
        </div>
        <div className={styles.rightElement}>
         <SpaceXCard />
       </div>
      </main>

      <footer className={styles.footer}>
        Developed By Nakendra
      </footer>
    </div>
  )
}
