import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext()

    return (
        <Routes>
            <Route 
                element={ 
                    <Button 
                        color="primary"
                        variant="contained" 
                        onClick={ toggleTheme }
                    >
                        Teste
                    </Button> 
                } 
                path="/pagina-inicial" 
            />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />  
        </Routes>
    )
}

export default AppRoutes