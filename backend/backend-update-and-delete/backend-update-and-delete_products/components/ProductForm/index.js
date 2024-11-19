import { StyledForm, StyledHeading, StyledLabel } from "./ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ProductForm({ onSubmit, isEditMode, prevProductInfo }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>
        {isEditMode ? "Edit the Fish Data" : "Add a new Fish"}
      </StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          defaultValue={prevProductInfo.name}
        />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input
          type="text"
          id="description"
          name="description"
          autoComplete="name"
          defaultValue={prevProductInfo.description}
        />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input
          type="number"
          id="price"
          name="price"
          autoComplete="off"
          min="0"
          defaultValue={prevProductInfo.price}
        />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select
          id="currency"
          name="currency"
          autoComplete="off"
          defaultValue={prevProductInfo.currency}
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
