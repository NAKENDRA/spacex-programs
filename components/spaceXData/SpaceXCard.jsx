import React ,{ useEffect } from 'react';
import styles from '../../styles/SpaceXCard.module.css';
import { getData } from '../../redux/actions/SpaceXActions';
import { useSelector, useDispatch } from "react-redux";
import SubCard from './SubCard'
const API_URL = 'https://api.spaceXdata.com/v3/launches';

export default function SpaceXCard() {
    const dispatch = useDispatch();
    const spaceXData = useSelector((state) => state.SpaceXReducer);
    const filterState = useSelector((state) => state.FilterReducer);
    const {launchYearFilter, landFilter, launchFilter} = filterState;
    const {data, loading, error} = spaceXData;
    useEffect(() => {
        const url = setAPIURL();
        dispatch(getData(url));
    }, [launchYearFilter, landFilter, launchFilter]);

    const setAPIURL = () => {
    let url = API_URL;
        url+= '/?limit=100'
        url += launchFilter && `&launch_success=${launchFilter}`;
        url += landFilter && `&land_success=${landFilter}`;
        url += launchYearFilter && `&launch_year=${launchYearFilter}`;
        return url;
    }
if(loading){
    return <div>
        Loading
    </div>
}

if(error){
    return <div>
        Error
    </div>
}

if(!data.length){
    return <div>
        No Data
    </div>
}
return(
    <div className={styles.spaceX_parent}>
      <div className={styles.spaceXCard}>
        {data.map((mission, index) => (
          <SubCard key={index} mission={mission} />
        ))}
      </div>

  </div>
)    
}