from jugaad_data.nse import NSELive
n = NSELive()
status = n.market_status()
status['marketState']