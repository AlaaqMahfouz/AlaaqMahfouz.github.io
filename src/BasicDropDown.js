import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import styles from './BasicDropDownCss.module.css';



export default function BasicDropDown()
{

   
    const [age, setAge] = useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const menuItems=[
        "Male",
        "Femal",
        "Non-Binary",
        "Agender",
        "Androgyne",
        "Androgynous",
        "Bigender",
        "Cis",
        "Cisgender",
        "Cis Female",
        "Cis Male",
        "Cis Man",
        "Cis Woman",
        "Cisgender Female",
        "Cisgender Male",
        "Cisgender Man",
        "Cisgender Woman",
        "Female to Male",
        "FTM",
        "Gender Fluid",
        "Gender Nonconforming",
        "Gender Questioning",
        "Gender Variant",
        "Genderqueer",
        "Intersex",
        "Male to Female",
        "MTF",
        "Neither",
        "Neutrois",
        "Non-binary",
        "Other",
        "Pangender",
        "Trans",
        "Trans*",
        "Trans Female",
        "Trans* Female",
        "Trans Male",
        "Trans* Male",
        "Trans Man",
        "Trans* Man",
        "Trans Person",
        "Trans* Person",
        "Trans Woman",
        "Trans* Woman",
        "Transfeminine",
        "Transgender",
        "Transgender Female",
        "Transgender Male",
        "Transgender Man",
        "Transgender Person",
        "Transgender Woman",
        "Transmasculine",
        "Transsexual",
        "Transsexual Female",
        "Transsexual Male",
        "Transsexual Man",
        "Transsexual Person",
        "Transsexual Woman",
        "Two-Spirit",
        "Metrosexual Male",
        "Metrosexual Female",
        "Male , but curious what being a Female is",
        "Female , but curious what being a Male is",
        "Male , but overweight so has Boobs",
        "Females , but have an Adam's Apple",
        "Hermaphrodite with predominant Male leanings",
        "Hermaphrodite with predominant Female leanings",
        "Hermaphrodite with no strong Gender leanings",
        "Conjoined Twin - Male",
        "Conjoined Twin - Female",
        "Born without Genitals - Identify as a Male",
        "Born without Genitals - Identify as a Female",
        "Born without Genitals - Proud of it",
        "Born a Male , Bad circumcision , raised Female",
        "Sentient Artifical Intelligence with no Gender",
        "Sentient Artifical Intelligence - identifies as Male",
        "Sentient Artifical Intelligence - identifies as Female",
        "Household pet that walked across the keyboard - Male",
        "Household pet that walked across the keyboard - Female",
        "Household pet that walked across the keyboard - other",
        "Attack helicopter",
        "Other",
        "None",
       

    ];
  
    return (

        <Box sx={{ minWidth: 120 }} className={styles.box}>
        <FormControl className ={styles.form}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Gender"
            onChange={handleChange}>

            { menuItems.map(item => (
                <MenuItem> {item} </MenuItem>
            ))}
           
          </Select>
        </FormControl>
      </Box>
        );
}
        
        

