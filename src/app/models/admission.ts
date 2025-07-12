import mongoose from "mongoose";
import { Admission } from "../interfaces/admission.interface";
import { admissionSchema } from "../schemas/admission.Schema";

export default mongoose.models.Admission ||
  mongoose.model<Admission>("Admission", admissionSchema);