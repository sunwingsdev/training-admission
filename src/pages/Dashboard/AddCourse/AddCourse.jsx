import { useForm } from "react-hook-form";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
          Add New Course
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700"
            >
              Course Image
            </label>
            <input
              type="file"
              id="image"
              {...register("image")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="courseName"
              className="text-sm font-medium text-gray-700"
            >
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              {...register("courseName", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.courseName && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="details"
              className="text-sm font-medium text-gray-700"
            >
              Details
            </label>
            <textarea
              id="details"
              {...register("details", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.details && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="onlinePrice"
              className="text-sm font-medium text-gray-700"
            >
              Online Price
            </label>
            <input
              type="text"
              id="onlinePrice"
              {...register("onlinePrice", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.onlinePrice && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="offlinePrice"
              className="text-sm font-medium text-gray-700"
            >
              Offline Price
            </label>
            <input
              type="text"
              id="offlinePrice"
              {...register("offlinePrice", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.offlinePrice && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="modules"
              className="text-sm font-medium text-gray-700"
            >
              Modules
            </label>
            <select
              multiple
              id="modules"
              {...register("modules")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="module1">Module 1</option>
              <option value="module2">Module 2</option>
              <option value="module3">Module 3</option>
              <option value="module4">Module 4</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="duration"
              className="text-sm font-medium text-gray-700"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              {...register("duration", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.duration && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="classSchedule"
              className="text-sm font-medium text-gray-700"
            >
              Class Schedule
            </label>
            <input
              type="text"
              id="classSchedule"
              {...register("classSchedule", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.classSchedule && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="conclusion"
              className="text-sm font-medium text-gray-700"
            >
              Conclusion
            </label>
            <textarea
              id="conclusion"
              {...register("conclusion", { required: true })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.conclusion && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
