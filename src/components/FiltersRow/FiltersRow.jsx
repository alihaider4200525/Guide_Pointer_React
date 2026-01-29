import Dropdown from '../Dropdown/Dropdown';
import DatePicker from '../DatePicker/DatePicker';
import './FiltersRow.css'

function FiltersRow() {
    return (
        <div className="filter-row">
            <div className='row top-row'>
                <div className='col-2 partial-div'>
                    <Dropdown label="Duration"
                        options={['1/2 Day', 'Full Day', 'Partial']} 
                    />
                </div>
                <div className='col-2 group'>
                    <Dropdown label="Group"
                        options={['1', '2', '3', '4', '5']}
                    />
                </div>
                <div className='col-4 calendar-box'>
                    <DatePicker />
                </div>
                <div className='col-2'>
                    <Dropdown label="Select Guide"
                        options={['John', 'Alex', 'Smith']}
                    />
                </div>
            </div>
        </div>
    )
}

export default FiltersRow