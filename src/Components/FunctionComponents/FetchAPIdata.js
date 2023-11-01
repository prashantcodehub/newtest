
export async function FetchAPIdata () {

    // try {
        let address =
          `https://www.googleapis.com/books/v1/volumes?q=harry+potter`;
        const responce = await fetch( address );
        const coin_data = await responce.json();
        console.log("coin_data", coin_data);
    // } catch (error) {
    //     console.log(error);
    // }
}

FetchAPIdata();