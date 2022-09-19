import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";

export default function DeskCard({ desk, bookings, status, onBookClick }) {
  return (
    <Card headerImage={desk.image} title={desk.name}>
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non
        mi. Nulla ornare faucibus ex, non facilisis nisl.
        Proin ut dui sed metus pharetra hend rerit vel non
        mi. Nulla ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button
          onClick={onBookClick}
          overrides={{
            BaseButton: { style: { width: "100%" } }
          }}
        >
          Book Now
        </Button>
      </StyledAction>
    </Card>
  );
}