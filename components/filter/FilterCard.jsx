import React, {useEffect} from 'react';
import styles from '../../styles/FilterCard.module.css'
import FilterButton from './FilterButton';
import {getYears} from '../../utils';
import { useSelector, useDispatch } from "react-redux";
import {setLandFilter,setLaunchFilter,setLaunchYearFilter} from '../../redux/actions/FilterActions';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

export default function FilterCard () {
const options = ['True', 'False'];
const dispatch = useDispatch();
const filterState = useSelector((state) => state.FilterReducer);
const {launchYearFilter, landFilter, launchFilter} = filterState;
const cookies = parseCookies()
console.log('cookies', cookies)
console.log('filterState', filterState)
  useEffect(() => {
    dispatch(setLaunchYearFilter(cookies.launchYearFilter));
    dispatch(setLaunchFilter(cookies.launchFilter));
    dispatch(setLandFilter(cookies.landFilter));
  },[]);

const subHeaderText = (subText) => (
    <div className={styles.launchText}>
        <div>{subText}</div>
        <hr width='50%'/>
    </div>
)
const renderLaunchYear = () =>(
    <>
    {getYears().map(value =>
    <FilterButton key={value} value={value} selectedValueFlag={value === launchYearFilter}
    updateValue = {(value) =>{launchYearFilter === value ? dispatch(setLaunchYearFilter('')) : dispatch(setLaunchYearFilter(value))}}/>)}
    </>
)

const renderOptions = (type = '', updatedValue) =>(
    <>
    {options.map(value =>
    <FilterButton key={value + type} value={value} selectedValueFlag={value === updatedValue}
    updateValue = {(value) =>{
        if(type === 'launch'){
            launchFilter === value ? dispatch(setLaunchFilter('')) : dispatch(setLaunchFilter(value)) 
        } else{
            landFilter === value ? dispatch(setLandFilter('')) : dispatch(setLandFilter(value))
        }
    }}
    />
    )}
    </>
)

return(
<div className={styles.filterCard}>
    <div className={styles.filterText}>Filters</div>
        {subHeaderText('Launch Year')}
    <div className={styles.filterButtonParent}>
        {renderLaunchYear()}
    </div>
    {subHeaderText('Successful Launch')}
    <div className={styles.filterButtonParent}>
        {renderOptions('launch', launchFilter)}
    </div>
    {subHeaderText('Successful Landing')}
    <div className={styles.filterButtonParent}>
        {renderOptions('landing', landFilter)}
    </div>
</div>)
}