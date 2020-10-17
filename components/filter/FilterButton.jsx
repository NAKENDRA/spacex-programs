import styles from '../../styles/FilterCard.module.css'

const FilterButton = ({value, updateValue, selectedValueFlag=false}) => (
    <button className={`${styles.filterButton}  ${selectedValueFlag ? styles.filterButton_Active: styles.filterButton_Inactive}`} onClick={() => updateValue(value) }>
        {value}
    </button>
)

export default FilterButton;