interface AppConfig {
  mainURL: string;
  displayFields: {
    keyValue: string;
    showingText: string;
    fieldType?: string;
    filterFields?: {
      label: string;
      value: string;
    }[];
  }[];
}

export const appConfig: AppConfig = {
  mainURL: `https://rickandmortyapi.com/api/character/`,
  displayFields: [
    {
      keyValue: "name",
      showingText: "Имя персонажа",
    },
    {
      keyValue: "image",
      showingText: "Изображение",
      fieldType: "image",
    },
    {
      keyValue: "gender",
      showingText: "Пол",
      filterFields: [
        {
          label: "Мужской",
          value: "male",
        },
        {
          label: "Женский",
          value: "female",
        },
      ],
    },
    {
      keyValue: "status",
      showingText: "Статус",
    },
  ],
};
