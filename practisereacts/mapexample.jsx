

return (
    <div>
      {fruits.map(fruit => (
        <Card
          key={fruit.id}
          name={fruit.name}
          color={fruit.color}
        />
      ))}
    </div>
  );