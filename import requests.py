import requests

# URL ISC untuk export CSV arrivals (event Palu 2018)
url = "https://www.isc.ac.uk/cgi-bin/web-db-v4?event_id=616642238&out_format=CSV&request=ARRIVALS"

# download file
response = requests.get(url)

if response.status_code == 200:
    with open("palu2018_arrivals.csv", "wb") as f:
        f.write(response.content)
    print("✅ File berhasil disimpan: palu2018_arrivals.csv")
else:
    print("⚠️ Gagal download, status:", response.status_code)
