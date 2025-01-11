function Item({ name, isPacked }) {
//   if (isPacked == true) {
//     return <li className="item">{name} &#10004;</li>;
//   } else {
//     return <li className="item">{name} &#1008;</li>;
//   }

// Dengan operator terner
    // return (
    //     <li className="item">
    //         {isPacked ? name + ' ✅' : name}
    //     </li>
    // )

// Dengan operator terner V2
    // return (
    //     <li className="item">
    //         {isPacked ? (
    //             <del>
    //                 {name + ' ✅'}
    //             </del>
    //         ) : (
    //             name
    //         )}
    //     </li>
    // )

    // return (
    //     <li className="item">
    //     {name} {isPacked ? '✅' : '❌'}
    //   </li>
    // )
}

export default function Index() {
  return (
    <section>
        <h1>Persiapan Camping</h1>
      <ul>
        <Item isPacked={true} name="Beras" />
        <Item isPacked={true} name="Obat-obatan" />
        <Item isPacked={false} name="Senter" />
      </ul>
    </section>
  );
}
