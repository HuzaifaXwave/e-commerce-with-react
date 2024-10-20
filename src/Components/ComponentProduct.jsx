import React, { useEffect, useState } from 'react'
// products image //
import product1 from "../Assests/Apple Ipad.png"
import product2 from "../Assests/Apple macbook.png"
import product3 from "../Assests/Apple phone 14 pro.png"
import { Box, Card, Typography, Divider, Snackbar, SnackbarContent } from '@mui/material'
import "./CSScomponents/ComponentProduct.css"
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

const productArrays = [
    {
        id: 1,
        img: product1,
        name: "Ipad Pro",
        price: "30$"
    },
    {
        id: 2,
        img: product2,
        name: "Macbook Pro",
        price: "12$"
    },
    {
        id: 3,
        img: product3,
        name: "Iphone 14 pro",
        price: "44$"
    },
];


const ComponentProduct = () => {
    const [cartList, setCartList] = useState([])
    const [openAlert, setOpenAlert] = useState(false)

    const cartHandler = (product) => {
        const isExist = cartList.find((cart) => cart.id === product.id);
        if (!isExist) {
            setCartList((prev) => [...prev, product]);
            let strCartlist = JSON.stringify(cartList)
            localStorage.setItem("cartList", strCartlist)
        } else {
            setOpenAlert(true)
        }
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent message=
                    {
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "300px", alignItems: "center" }}>
                            <span>Item already added</span>
                            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
                        </Box>
                    }
                />

            </Snackbar>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "100px", gap: "40px" }}>
                {
                    productArrays?.map((product, index) => {
                        return (
                            <>
                                <Card key={index}>
                                    <Box sx={{
                                        textAlign: "center",
                                        padding: "10px",
                                        cursor: "pointer",
                                        height: "300px",
                                        border: "2px solid grey",
                                        borderRadius: "20px"
                                    }}>
                                        <img className='product-img' width={200} src={product.img} alt={'${product.name'} />
                                        <Typography variant='h5'>{product.name}</Typography>
                                        <Typography variant="span">{product.price}</Typography>
                                        <Divider variant='fullWidth' sx={{ borderColor: "black", margin: "5px 0px" }} />
                                        <Box>
                                            <ShareIcon />
                                            <FavoriteBorderIcon sx={{ margin: "0px 20px" }} />
                                            <ShoppingCartIcon onClick={() => { cartHandler(product) }} />
                                        </Box>
                                    </Box>
                                </Card>
                            </>
                        )
                    })
                }
            </Box>

        </>
    )
}

export default ComponentProduct