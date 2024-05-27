import styles from "../Filter/filter.module.css";
import Button from "../Button/button";

type FilterOptionsProps = {
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onApplyFilter: () => void;
};

const FilterOptions = ({
  selectedRegion,
  onSelectRegion,
  onSortChange,
  onApplyFilter,
}: FilterOptionsProps) => {

  return (
    <div className={styles.filterWrapper}>
      <h3 className={styles.filterTitle}>Choose by region or replies</h3>
      <div className={styles.filterSelections}>
        <div className={styles.filterRegionBox}>
          <select
            className={styles.selection}
            id="regionSelect"
            value={selectedRegion}
            onChange={(e) => onSelectRegion(e.target.value)}
          >
            <option value=""> All regions</option>

            <option value="Vilnius and around">Vilnius and around</option>
            <option value="Dzukija">Dzukija</option>
            <option value="Suvalkija">Suvalkija</option>
            <option value="Aukstaitija">Aukstaitija</option>
            <option value="LithuaniaMinor">Lithuania Minor</option>
            <option value="Zemaitija">Zemaitija</option>
          </select>
        </div>
        <div className={styles.repliesFilter}>
          <select className={styles.selection} onChange={onSortChange}>
            <label htmlFor="repliesSelect">Question with replies:</label>
            <option value="">Sort by replies</option>
            <option value="replies">Replies</option>
            <option value="noReplies">No replies</option>
          </select>
        </div>
        <Button
          className={styles.filterBtn}
          onClick={onApplyFilter}
          text="Filter"
        />
      </div>
    </div>
  );
};

export default FilterOptions;
