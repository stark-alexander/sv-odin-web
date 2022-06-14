export function H1(props: { children?: React.ReactNode }) {
  return <h1 className="text-2xl font-medium my-4 text-odinblue">{props.children}</h1>;
}

export function H2(props: { children?: React.ReactNode }) {
  return <h2 className="text-xl font-medium my-2">{props.children}</h2>;
}

export function H3(props: { children?: React.ReactNode }) {
  return <h3 className="text-lg font-bold my-1">{props.children}</h3>;
}

export function Text(props: { children?: React.ReactNode }) {
  return <p className="my-4">{props.children}</p>;
}

export function UnorderedList(props: { children?: React.ReactNode }) {
  return <ul className="my-4 ml-6 list-disc">{props.children}</ul>;
}

export function OrderedList(props: { children?: React.ReactNode }) {
  return <ul className="my-4 ml-6 list-decimal">{props.children}</ul>;
}
