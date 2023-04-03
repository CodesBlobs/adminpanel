import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import LatestVideoCard from "../../components/LatestVideoCard";
import TabPanel from "../../components/TabPanel";
import OverviewCharts from "./OverviewCharts";
import RealTimeCard from "./RealtimeCard";
import TopVideosList from "./TopVideosList";
const columns = [
    {
        field: 'id',
        headerName: 'id',
        minWidth: 499,
        flex: 4,

    },
    {
        field: 'stname',
        headerName: 'student name',
        minWidth: 499,
        flex: 4,
        renderCell: (params) => <Box sx={styles.red}>
            <Box sx={styles.pageTitle}>
                <Typography sx={styles.tabHeader}>{params.row.stname}</Typography>
            </Box>
        </Box>
    }
]
const students = [
    { id: 1, stname: 'RED' },
    { id: 2, stname: 'DRED' }
]
const urhundreddollarismine = [
    { id: 1, stname: 'lin', },
    { id: 2, stname: 'caca' }
]

function Analytics() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">Analytics</Typography>
        <Box sx={styles.tabHeader}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Overview" id='tab-0' />
                <Tab label="Content" id='tab-1' />
                <Tab label="Audience" id='tab-2' />
                <Tab label="Revenue" id='tab-3' />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{}}>
            <Box sx={styles.overviewContainer}>
                <Box sx={styles.statsContainer}>
                    <Typography variant="h5">
                        Your channel got 23,084 views in the last 28 days
                    </Typography>
                    <OverviewCharts />
                    <Divider sx={styles.divider} />
                    <TopVideosList />
                </Box>
                <Box>
                    <RealTimeCard />
                    <LatestVideoCard />
                </Box>

            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <TopVideosList />
        </TabPanel>




        <TabPanel value={value} index={2}>
            <DataGrid
                rows={students}
                columns={columns}
                pageSize={10}
                rowsPerPageOption={[10]}
                checkboxSelection
                autoHeight
                rowHeight={70}
            />

        </TabPanel>
        <TabPanel value={value} index={3}>
            <Typography>Revenue</Typography>
        </TabPanel>
    </Box>;
}

export default Analytics;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    tabHeader: {
        borderBottom: 1,
        borderColor: 'divider'
    },
    overviewContainer: {
        display: 'grid',
        gridTemplateColumns: { 'md': '1fr', 'lg': '1fr 300px' },
        gap: 2,
        justifyContent: 'center',
    },
    statsContainer: {
        bgcolor: 'neutral.light',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    divider: {
        my: 4
    },
    red: {
        color: 'red'
    }

}

