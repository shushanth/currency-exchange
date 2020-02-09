interface ModelListPropsI {
  name: string;
  showModal: boolean;
  listItems?: { name?: string | undefined }[];
  selectedItem?: string;
  onClose: () => void;
  onItemSelect: (item: string | '') => void;
}

export { ModelListPropsI };
