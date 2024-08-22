import { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import dayjs from "dayjs";
import autoTable from 'jspdf-autotable';


const Home = () => {
    const [listing, setListing] = useState('')
    const [listingInfo, setListingInfo] = useState({});

    const getListingInfo = async (listing) => {
        const listingID = {
            id: listing.split('').splice((listing.length - 36), 36).join('')
        }

        try {
            const result = await axios.post('https://garage-backend.onrender.com/getListing', listingID)
            setListingInfo(result.data.result.listing)
            console.log(listingInfo)
        } catch(err) {
            console.log(err)
        }
    }
    
    const data = {
        result: {
            listing: {
                id: "ca7e92d4-6d97-45a5-bc8f-d4bbc659c963",
                createdAt: "2024-07-08T20:13:47.975Z",
                updatedAt: "2024-07-11T15:50:54.732Z",
                itemBrand: "E-One",
                itemCategory: 0,
                listingTitle: "2003 E-One Typhoon Engine",
                listingDescription: "2003 E-One Typhoon Rescue Pumper 1000 water 1500GPM pump. Large hose bed seating for 6 (5 SCBA). Available immediately, lots of life left in it!",
                sellingPrice: 27000,
                isShippable: false,
                imageUrls: [
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478066758.jpg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478068041.jpg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478069831.jpg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478071132.jpg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478072445.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478075581.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720478076912.jpg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632862725.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632864209.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632865509.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632866534.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632867668.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632868777.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632870045.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632871141.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632872198.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632873907.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632875047.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632876655.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632878311.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632879972.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632881099.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632882374.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632883449.jpeg",
                    "https://tckhzquklzptybofowyk.supabase.co/storage/v1/object/public/items/84addf60-06bb-464b-9b76-43aacbd2ce40/1720632884881.jpeg"
                ],
                listingStatus: 0,
                tags: [],
                categories: [
                    1
                ],
                itemWears: [],
                scrapedLink: null,
                itemAge: 2003,
                itemCondition: "3",
                itemLength: null,
                itemWidth: null,
                itemHeight: null,
                itemWeight: 50000,
                addressPrimary: "4105 Rt 22",
                addressSecondary: "",
                addressCity: "Plattsburgh",
                addressState: "NY",
                addressZip: "12901",
                userId: "84addf60-06bb-464b-9b76-43aacbd2ce40"
            }
        },
        error: ""
    };

    
    const generatePDF = async () => {

        const doc = new jsPDF()
        doc.setFontSize(16)

            //      Header
        const logoData = 
            'data:image/png;base64,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'
        doc.addImage(logoData, 'PNG', 12, 10, 10, 10)


        doc.setFont('helvetica', 'bold')
        doc.text('Garage', 25, 17)
        doc.setFont('helvetica', 'normal')
        doc.text('Invoice', doc.internal.pageSize.width - 40, 17)

//      Payee Info
        doc.setFontSize(12) 
        doc.setFont('helvetica', 'bold')
        doc.text('BILLED TO:', 20, 35)
        doc.setFont('helvetica', 'normal')
        doc.text('Payee Name', 20, 44)
        doc.text('Payee Email', 20, 52)
        
//      Listing ID and Date
        doc.text(`Reference No.`, doc.internal.pageSize.width - 47, 35)
        doc.setFontSize(10)
        doc.text(`${data.result.listing.id}`, doc.internal.pageSize.width - 80, 42)
        doc.setFontSize(12)
        doc.text(`${dayjs().format('MMMM D, YYYY')}`, doc.internal.pageSize.width - 52, 52);
        doc.setLineWidth(0.2)
        doc.line(12, 60, 200, 60)

        const tableHeaders = [['Item', 'Year', 'Located in', 'Price']]
        const tableData = [
            [[`${data.result.listing.listingTitle}\n\n${data.result.listing.listingDescription}`], `${data.result.listing.itemAge}`, `${data.result.listing.addressState}`, `$${data.result.listing.sellingPrice}`]
        ]

        doc.autoTable({
            head: tableHeaders,
            body: tableData,
            startY:  75,
            headStyles: { fillColor: [236,104,0], textColor: 255 },
            columnStyles: {
                0: { cellWidth: 'auto' },
                1: { cellWidth: 30 },
                2: { cellWidth: 40 },
                3: { cellWidth: 40 }
    }});

        doc.save('invoice.pdf')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // await getListingInfo(listing)
        generatePDF()

    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="link__form">
                <label htmlFor="link" className="link__input-label">Garage Listing</label>
                <input 
                    type="text"
                    value={listing}
                    className="link__input"
                    onChange={(e) => setListing(e.target.value)}
                />
                <button type='submit' className="link__input-submit">Get Invoice</button>
            </form>
        </main>
    )
}

export default Home