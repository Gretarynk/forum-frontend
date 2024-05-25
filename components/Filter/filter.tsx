import styles from "../Filter/filter.module.css"
import Button from "../Button/button";

type FilterOptionsProps = {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  onSortChange:(event: React.ChangeEvent<HTMLSelectElement>)=>void;
  onApplyFilter:()=>void;
};

const FilterOptions = ({ selectedRegion, onSelectRegion , onSortChange, onApplyFilter}:FilterOptionsProps) => {
  // const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   onSelectRegion(event.target.value);
  // };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterRegionBox} >
      <label htmlFor="regionSelect">Select Region:</label>
      <select className={styles.selection} id="regionSelect" value={selectedRegion} onChange={(e)=> onSelectRegion(e.target.value)}>
        <option value="">  All regions</option>
        
        <option value="Vilnius and around">Vilnius and around</option>
        <option value="Dzukija">Dzukija</option>
        <option value="Suvalkija">Suvalkija</option>
        <option value="Aukstaitija">Aukstaitija</option>
        <option value="LithuaniaMinor">Lithuania Minor</option>
        <option value="Zemaitija">Zemaitija</option>
      </select>
      </div>
      <div className={styles.repliesFilter}>
        <select className={styles.filterByRepliesBox} onChange={onSortChange}>
        <label htmlFor="repliesSelect">Question with replies:</label>
        <option value="">--------</option>
        <option value="replies">Replies</option>
        <option value="noReplies">No replies</option>
        </select>
      </div>
    <Button  onClick={onApplyFilter} text="Sort"/>

    </div>
  );
};

export default FilterOptions;
