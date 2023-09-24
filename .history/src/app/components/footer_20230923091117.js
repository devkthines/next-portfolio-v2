

 export default function Footer(){

    return(
        <>
        <footer><p>Copyright 2023- Korey Hines</p>
        {Object.entries(btnName).map(([k, v]) => (
                <div className='d-inline-block' key={v.id}>
                  <OverlayTrigger
                    trigger="hover"
                    key={v.id}
                    placement={v.placement}
                    overlay={

                      <Tooltip id={`tooltip-${v.placement}`}>
                        {v.info}
                      </Tooltip>
                    }
                  >
                    {v.icon}
                  </OverlayTrigger>
                </div>

        </footer>
        </>
    )
 }