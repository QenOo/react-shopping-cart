const Filter = (props) => {
    return (
        <form>
            <div className='card p-4'>
                <div className='form-group'>
                    <span>Size</span>
                    <select
                        className='form-select'
                        onChange={props.handleFilterBySize}
                        value={props.size}
                    >
                        <option value='ALL'>All</option>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='XXL'>XXL</option>
                    </select>
                </div>
                <div className='form-group'>
                    <span>Sort by</span>
                    <select
                        className='form-select'
                        onChange={props.handleFilterBySort}
                        value={props.sort}
                    >
                        <option value='latest'>Latest</option>
                        <option value='lowest'>Lowest</option>
                        <option value='highest'>Highest</option>
                    </select>
                </div>
            </div>
        </form>
    );
};

export default Filter;
