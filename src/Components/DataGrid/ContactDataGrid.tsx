import { useCallback, useState } from "react";
import { DataGrid, GridRenderCellParams, GridToolbar, GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import { useTheme, Theme } from '@mui/material/styles';
import { contactData } from "../../Data/ContactData";
import { Button, Collapse } from "@mui/material";

const getColumns = (theme: Theme) => {
  return [
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div
        >
          {cellValues.value}
        </div>
      );
    }
  },
  {
    field: "role",
    headerName: "Role",
    minWidth: 100,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div>
          {cellValues.value}
        </div>
      );
    }
  },
  {
    field: "skills",
    headerName: "Skills",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string[]>) => {      
      return (
        <div>
          {cellValues.value ? cellValues.value[0]: ""}
        </div>
      );
    }
  },
  {
    field: "startDate",
    headerName: "Start Date",
    minWidth: 120,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div>
          {cellValues.value}
        </div>
      );
    }
  },
  {
    field: "preference",
    headerName: "Work Preference",
    minWidth: 150,
    renderCell: (cellValues: GridRenderCellParams<string>) => {
      return (
        <div>
          {cellValues.value}
        </div>
      );
    }
  }
];
}

export default function ContactDataGrid() {
  const theme = useTheme();
  const [open, setOpen] = useState(true)
  const rows = () => [...contactData];
  return (
    <div style={{ height: 500 }}>
      <Button onClick={()=>setOpen(!open)}>Collapse</Button>
      {/* <Collapse in={open}> */}
        <DataGrid
          rows={rows()}
          columns={getColumns(theme)}
          pageSize={5}
          headerHeight={60}
          rowHeight={120}
          components={
            {Toolbar: () => ( <GridToolbarContainer sx={{justifyContent:'flex-end', "& button ": {border: "none"}, "& .MuiBox-root":{display:"none"}}}>
              <GridToolbarExport/>
            </GridToolbarContainer>)}
          }
          initialState={{
            sorting: { sortModel: [{field: "name", sort: 'asc' }]}
          }}
          />
        {/* </Collapse> */}
    </div>
  )
}