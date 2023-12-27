import { Avatar, Box, Divider, Drawer, List, ListItemButton, ListItemText, useTheme } from "@mui/material"

interface IMenuLateralProps{
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme()

    return (
        <>
            <Drawer
                variant="permanent"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    height="100%"
                    width={ theme.spacing(28) }
                >
                    <Box
                        alignItems="center"
                        display="flex"
                        justifyContent="center"
                        height={ theme.spacing(20) }
                        width="100%"
                    >
                        <Avatar
                            src="https://github.com/eu-erickfernandes.png"
                            sx={{ 
                                height: theme.spacing(12),
                                width: theme.spacing(12)
                            }}
                        />
                    </Box>

                    <Divider />
                            
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemText
                                    primary="Página Inicial"
                                />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box
                height="100vh"
                marginLeft={ theme.spacing(28) }
            >
                { children }
            </Box>
        </>
    )
}