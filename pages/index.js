import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/SpaceX.module.css'
import FilterCard from '../components/filter';
import SpaceXCard from '../components/spaceXData';
import { parseCookies } from 'nookies';
import {setCookieFunc } from 'utils';
import {setLandFilter,setLaunchFilter,setLaunchYearFilter} from '../redux/actions/FilterActions';
import { useSelector, useDispatch } from "react-redux";

export default function SpaceX() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.FilterReducer);
  const {launchYearFilter, landFilter, launchFilter} = filterState;
  const cookies = parseCookies();  

    useEffect(() => {
      dispatch(setLaunchYearFilter(cookies.launchYearFilter || launchYearFilter));
      dispatch(setLaunchFilter(cookies.launchFilter || launchFilter));
      dispatch(setLandFilter(cookies.landFilter || landFilter));
    },[]);

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.headerElement}>SpaceX Launch Programs</h1>
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
