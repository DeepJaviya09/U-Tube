import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
    direction = "row" 
    alignItems="center"
    p={2} 
    sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between'}}
    >
      <Link to = "/" style={{display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 'bold', fontSize: '22px', fontFamily: 'sans-serif' }}>
        <img src={logo} alt="logo" height={45} /> U-Tube
      </Link>
      <SearchBar />

    </Stack>
)

export default Navbar
