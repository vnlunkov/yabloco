import { OverlayTrigger, Popover } from 'react-bootstrap';
import ReactTable from 'react-table';

const sampleTable = observer(() => {
const table = <ReactTable data={tableData} pivotBy={["parent"]} columns={tableColumn}  />
return (<>
<OverlayTrigger className="popover"
 popperConfig={{ modifiers: { preventOverflow: { enabled: false } } }} 
 placement={row.distance < 400 ? "auto" : "left"} 
 trigger="click" rootClose overlay={<Popover>{table}</Popover>}> 
<p>some data </p>
</OverlayTrigger> 
</>);
})

export default sampleTable